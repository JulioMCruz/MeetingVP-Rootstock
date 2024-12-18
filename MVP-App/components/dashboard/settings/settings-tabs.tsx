import { useEffect, useState, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useDynamicContext, useIsLoggedIn } from '@dynamic-labs/sdk-react-core';
import { useAccount } from 'wagmi';
import { toast } from 'sonner';
import { Image as ImageIcon, X, ExternalLink, QrCode } from 'lucide-react';
import { QRCodeModal } from './qr-code-modal';

interface UserProfile {
  fullName: string;
  address: string;
  email: string;
  twitter: string;
  linkedin: string;
  github: string;
  farcaster: string;
  profileImage: string;
}

const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB in bytes
const MIN_DIMENSIONS = 200; // Minimum width/height in pixels
const MAX_DIMENSIONS = 2048; // Maximum width/height in pixels

export function SettingsTabs() {
  const { user } = useDynamicContext();
  const isLoggedIn = useIsLoggedIn();
  const { address } = useAccount();
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    fullName: '',
    address: '',
    email: '',
    twitter: '',
    linkedin: '',
    github: '',
    farcaster: '',
    profileImage: '',
  });
  const [imageError, setImageError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!user?.userId) return;

      try {
        const response = await fetch(`/api/users?userId=${user.userId}`);
        if (response.ok) {
          const userData = await response.json();
          setProfile({
            fullName: userData.fullName || '',
            address: userData.address || '',
            email: userData.email || '',
            twitter: userData.twitter || '',
            linkedin: userData.linkedin || '',
            github: userData.github || '',
            farcaster: userData.farcaster || '',
            profileImage: userData.profileImage || '',
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

  const validateImageDimensions = (file: File): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new window.Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        URL.revokeObjectURL(img.src);
        if (img.width < MIN_DIMENSIONS || img.height < MIN_DIMENSIONS) {
          setImageError(`Image must be at least ${MIN_DIMENSIONS}x${MIN_DIMENSIONS} pixels`);
          resolve(false);
        } else if (img.width > MAX_DIMENSIONS || img.height > MAX_DIMENSIONS) {
          setImageError(`Image must be no larger than ${MAX_DIMENSIONS}x${MAX_DIMENSIONS} pixels`);
          resolve(false);
        } else {
          resolve(true);
        }
      };
      img.onerror = () => {
        setImageError('Error loading image');
        resolve(false);
      };
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImageError('');
    setIsUploading(true);
    
    try {
      if (!file) return;

      // Validate file type
      if (!file.type.startsWith('image/')) {
        setImageError('Please upload an image file');
        return;
      }

      // Validate file size
      if (file.size > MAX_FILE_SIZE) {
        setImageError('Image must be less than 1MB');
        return;
      }

      // Validate dimensions
      const validDimensions = await validateImageDimensions(file);
      if (!validDimensions) return;

      // Convert to base64
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setProfile(prev => ({
          ...prev,
          profileImage: base64String
        }));
        setIsUploading(false);
      };
      reader.onerror = () => {
        setImageError('Error reading file');
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error processing image:', error);
      setImageError('Error processing image');
      setIsUploading(false);
    }
  };

  const handleRemoveImage = () => {
    setProfile(prev => ({
      ...prev,
      profileImage: ''
    }));
    setImageError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <Tabs defaultValue="profile">
      <TabsList className="mb-6">
        <TabsTrigger value="profile">Profile</TabsTrigger>
      </TabsList>
      
      <TabsContent value="profile">
        <div className="space-y-4">

        {user?.userId && (
          <div className="flex gap-2">
            <Button
              variant="secondary"
              onClick={() => window.open(`/book/${user.userId}`, '_blank')}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Preview Booking Page
            </Button>
            <Button
              variant="secondary"
              onClick={() => setShowQRModal(true)}
            >
              <QrCode className="mr-2 h-4 w-4" />
              Generate QR Code
            </Button>
            <QRCodeModal 
              open={showQRModal}
              onClose={() => setShowQRModal(false)}
              url={`${window.location.origin}/book/${user.userId}`}
            />
          </div>
        )}

          <div className="space-y-2">


            <Label>Profile Image</Label>
            <div className="flex items-center gap-4">
              {profile.profileImage ? (
                <div className="relative">
                  <img 
                    src={profile.profileImage} 
                    alt="Profile" 
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute -top-2 -right-2 h-6 w-6"
                    onClick={handleRemoveImage}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
                  <ImageIcon className="h-8 w-8 text-muted-foreground" />
                </div>
              )}
              <div className="space-y-2">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isUploading}
                  >
                    {isUploading ? 'Uploading...' : 'Upload Image'}
                  </Button>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
                <p className="text-sm text-muted-foreground">
                  Recommended: Square image, 200x200 to 2048x2048 pixels, max 1MB
                </p>
                {imageError && (
                  <p className="text-sm text-destructive">
                    {imageError}
                  </p>
                )}
              </div>
            </div>
          </div>
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