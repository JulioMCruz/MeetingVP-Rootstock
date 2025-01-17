'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Plus, X } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useDynamicContext } from '@/lib/dynamic';
import { toast } from 'sonner';

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const timeSlots = Array.from({ length: 24 }, (_, i) => {
  const hour = i < 12 ? i : i - 12;
  const period = i < 12 ? 'AM' : 'PM';
  return `${hour === 0 ? 12 : hour}:00 ${period}`;
});

export function AvailabilitySettings() {
  const [isAvailable, setIsAvailable] = useState(true);
  const [selectedDays, setSelectedDays] = useState<string[]>(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']);
  const [timeRanges, setTimeRanges] = useState([{ start: '9:00 AM', end: '5:00 PM' }]);
  const [bufferTime, setBufferTime] = useState(15);
  const [loading, setLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  const { user } = useDynamicContext();

  useEffect(() => {
    const loadAvailability = async () => {
      if (!user?.userId) return;

      try {
        const response = await fetch(`/api/users/availability?userId=${user.userId}`);
        if (response.ok) {
          const data = await response.json();
          if (data) {
            setIsAvailable(data.isAvailable);
            setSelectedDays(data.workingDays);
            setTimeRanges(data.timeRanges);
            setBufferTime(data.bufferTime);
          }
        }
      } catch (error) {
        console.error('Error loading availability:', error);
        toast.error('Failed to load availability settings');
      } finally {
        setInitialLoad(false);
      }
    };

    loadAvailability();
  }, [user?.userId]);

  const toggleDay = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(d => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const addTimeRange = () => {
    setTimeRanges([...timeRanges, { start: '9:00 AM', end: '5:00 PM' }]);
  };

  const removeTimeRange = (index: number) => {
    setTimeRanges(timeRanges.filter((_, i) => i !== index));
  };

  const updateTimeRange = (index: number, field: 'start' | 'end', value: string) => {
    const newRanges = [...timeRanges];
    newRanges[index] = { ...newRanges[index], [field]: value };
    setTimeRanges(newRanges);
  };

  const handleSave = async () => {
    if (!user?.userId) return;

    setLoading(true);
    try {
      const response = await fetch(`/api/users/availability?userId=${user.userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isAvailable,
          selectedDays,
          timeRanges,
          bufferTime,
        }),
      });

      if (response.ok) {
        toast.success('Availability settings saved successfully');
      } else {
        throw new Error('Failed to save settings');
      }
    } catch (error) {
      console.error('Error saving availability:', error);
      toast.error('Failed to save availability settings');
    } finally {
      setLoading(false);
    }
  };

  if (initialLoad) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <Label>Accept Meeting Requests</Label>
          <p className="text-sm text-muted-foreground">
            Toggle to enable or disable meeting requests
          </p>
        </div>
        <Switch checked={isAvailable} onCheckedChange={setIsAvailable} />
      </div>

      <div className="space-y-4">
        <Label>Working Days</Label>
        <div className="flex flex-wrap gap-2">
          {days.map((day) => (
            <Button
              key={day}
              variant={selectedDays.includes(day) ? "default" : "outline"}
              onClick={() => toggleDay(day)}
              className="w-[120px]"
            >
              {day}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label>Working Hours</Label>
          <Button variant="outline" size="sm" onClick={addTimeRange}>
            <Plus className="h-4 w-4 mr-2" />
            Add Time Range
          </Button>
        </div>

        <div className="space-y-4">
          {timeRanges.map((range, index) => (
            <Card key={index} className="p-4">
              <div className="flex items-center gap-4">
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Start Time</Label>
                    <Select
                      value={range.start}
                      onValueChange={(value) => updateTimeRange(index, 'start', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>End Time</Label>
                    <Select
                      value={range.end}
                      onValueChange={(value) => updateTimeRange(index, 'end', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {timeRanges.length > 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeTimeRange(index)}
                    className="mt-6"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <Label>Buffer Time</Label>
        <div className="flex items-center gap-4">
          <Input
            type="number"
            min="0"
            placeholder="15"
            className="w-24"
          />
          <span className="text-muted-foreground">minutes between meetings</span>
        </div>
      </div>

      <div className="pt-6 border-t border-border">
        <Button onClick={handleSave} disabled={loading}>
          {loading ? 'Saving...' : 'Save Changes'}
        </Button>
      </div>
    </div>
  );
}