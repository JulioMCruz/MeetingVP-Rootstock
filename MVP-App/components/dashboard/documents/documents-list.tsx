import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const documents = [
  {
    id: 1,
    title: 'DevRel Workshop Certificate',
    type: 'Certificate',
    date: 'Mar 10, 2024',
    status: 'Verified',
  },
  {
    id: 2,
    title: 'Team Sync Notes',
    type: 'Meeting Notes',
    date: 'Mar 8, 2024',
    status: 'Pending',
  },
  {
    id: 3,
    title: 'Client Meeting Report',
    type: 'Report',
    date: 'Mar 5, 2024',
    status: 'Verified',
  },
];

export function DocumentsList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Document</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {documents.map((doc) => (
          <TableRow key={doc.id}>
            <TableCell>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                {doc.title}
              </div>
            </TableCell>
            <TableCell>{doc.type}</TableCell>
            <TableCell>{doc.date}</TableCell>
            <TableCell>{doc.status}</TableCell>
            <TableCell>
              <Button variant="ghost" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}