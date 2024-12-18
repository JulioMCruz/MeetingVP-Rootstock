import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useDynamicContext, useIsLoggedIn } from '@dynamic-labs/sdk-react-core'
import { useAccount } from 'wagmi';


export function SettingsTabs() {

  const { user } = useDynamicContext();
  const isLoggedIn = useIsLoggedIn();
  const { address } = useAccount();

  console.log('user', user);
  console.log('address', address);
  console.log('isLoggedIn', isLoggedIn);

  return (
    <Tabs defaultValue="profile">
      <TabsList className="mb-6">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
        <TabsTrigger value="wallet">Wallet</TabsTrigger>
      </TabsList>
      
      <TabsContent value="profile">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" defaultValue="John Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="john@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="twitter">X (Twitter)</Label>
            <Input id="twitter" placeholder="https://x.com/username" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="linkedin">LinkedIn</Label>
            <Input id="linkedin" placeholder="https://linkedin.com/in/username" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="github">GitHub</Label>
            <Input id="github" placeholder="https://github.com/username" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="farcaster">Farcaster</Label>
            <Input id="farcaster" placeholder="@username" />
          </div>
          
          <Button>Save Changes</Button>
        </div>
      </TabsContent>

      <TabsContent value="notifications">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Email Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive meeting reminders via email</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>Browser Notifications</Label>
              <p className="text-sm text-muted-foreground">Show desktop notifications</p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </TabsContent>

      <TabsContent value="wallet">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Connected Wallet</Label>
            <Card className="p-4">
                <code className="text-sm">{address}</code>
            </Card>
          </div>
          {/* <Button variant="outline">Disconnect Wallet</Button> */}
        </div>
      </TabsContent>
    </Tabs>
  );
}