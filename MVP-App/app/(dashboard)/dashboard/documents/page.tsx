'use client';

import { Card } from '@/components/ui/card';
import { DocumentsList } from '@/components/dashboard/documents/documents-list';
import { DocumentFilters } from '@/components/dashboard/documents/document-filters';

export default function DocumentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Documents</h1>
        <p className="text-muted-foreground">View and manage your meeting documents</p>
      </div>

      <Card className="p-6">
        <DocumentFilters />
        <DocumentsList />
      </Card>
    </div>
  );
}