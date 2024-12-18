import { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useDynamicContext, useIsLoggedIn } from '@dynamic-labs/sdk-react-core';
import { useAccount } from 'wagmi';
import { toast } from 'sonner';

interface UserProfile {
  fullName: string;
  email: string;
  twitter: string;
  linkedin: string;
  github: string;
  farcaster: string;
}

export function SettingsTabs() {
  const { user } = useDynamicContext();
  const isLoggedIn = useIsLoggedIn();
  const { address } = useAccount();
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    fullName: '',
    email: '',
    twitter: '',
    linkedin: '',
    github: '',
    farcaster: '',
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!user?.userId) return;

      try {
        const response = await fetch(`/api/users?userId=${user.userId}`);
        if (response.ok) {
          const userData = await response.json();
          setProfile({
            fullName: userData.fullName || '',
            email: userData.email || '',
            twitter: userData.twitter || '',
            linkedin: userData.linkedin || '',
            github: userData.github || '',
            farcaster: userData.farcaster || '',
          });
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
        toast.error('Failed to load profile data');
      }
    };

    fetchUserProfile();
  }, [user?.userId]);

  const handleInputChange = (field: keyof UserProfile) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProfile(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleSaveChanges = async () => {
    if (!user?.userId) return;

    if (!profile.fullName.trim()) {
      toast.error('Full name is required');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`/api/users?userId=${user.userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
      });

      if (response.ok) {
        toast.success('Profile updated successfully');
      } else {
        throw new Error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Tabs defaultValue="profile">
      <TabsList className="mb-6">
        <TabsTrigger value="profile">Profile</TabsTrigger>
      </TabsList>
      
      <TabsContent value="profile">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input 
              id="name" 
              value={profile.fullName}
              onChange={handleInputChange('fullName')}
              required
            />
            {!profile.fullName.trim() && (
              <p className="text-sm text-muted-foreground text-red-500">
                This field is required
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              value={profile.email}
              onChange={handleInputChange('email')}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="twitter">X (Twitter)</Label>
            <Input 
              id="twitter" 
              placeholder="https://x.com/username"
              value={profile.twitter}
              onChange={handleInputChange('twitter')}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="linkedin">LinkedIn</Label>
            <Input 
              id="linkedin" 
              placeholder="https://linkedin.com/in/username"
              value={profile.linkedin}
              onChange={handleInputChange('linkedin')}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="github">GitHub</Label>
            <Input 
              id="github" 
              placeholder="https://github.com/username"
              value={profile.github}
              onChange={handleInputChange('github')}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="farcaster">Farcaster</Label>
            <Input 
              id="farcaster" 
              placeholder="@username"
              value={profile.farcaster}
              onChange={handleInputChange('farcaster')}
            />
          </div>
          
          <Button 
            onClick={handleSaveChanges} 
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </TabsContent>
    </Tabs>
  );
}