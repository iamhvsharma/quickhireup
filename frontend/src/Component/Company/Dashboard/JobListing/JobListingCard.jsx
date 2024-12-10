import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../../../components/ui/alert-dialog";

export default function JobListingCard({ job, onDelete, onStatusChange }) {
  if (!job) {
    return null; // or some fallback UI
  }

  const navigate = useNavigate();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const getStatusColor = (isOpen) => {
    return isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  const handleEdit = () => {
    navigate(`/company/jobs/edit/${job.id}`);
  };

  const handleDelete = () => {
    onDelete(job.id);
    setShowDeleteDialog(false);
  };

  const handleViewApplications = () => {
    navigate(`/company/jobs/${job.id}/applications`);
  };

  const toggleStatus = () => {
    onStatusChange(job.id, !job.isOpen);
  };

  return (
    <Card className="p-6 mb-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
          <p className="text-gray-600 text-sm mb-2">
            Created on {new Date(job.dateCreated).toLocaleDateString()}
          </p>
          <Badge 
            className={`${getStatusColor(job.isOpen)} cursor-pointer`}
            onClick={toggleStatus}
          >
            {job.isOpen ? 'Active' : 'Closed'}
          </Badge>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleEdit}>
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </Button>
          <Button variant="destructive" size="sm" onClick={() => setShowDeleteDialog(true)}>
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">Description</h4>
          <p className="text-gray-600">{job.description}</p>
        </div>

        <div>
          <h4 className="font-medium mb-2">Requirements</h4>
          <ul className="list-disc list-inside text-gray-600">
            {job.requirements && Array.isArray(job.requirements) ? (
              job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))
            ) : (
              <li>No requirements specified</li>
            )}
          </ul>
        </div>

        <div className="flex justify-between items-center pt-4 border-t">
          <div className="flex items-center text-gray-600">
            <Users className="h-4 w-4 mr-2" />
            <span>{job.applicants} applicants</span>
          </div>
          <Button variant="link" className="text-blue-600" onClick={handleViewApplications}>
            View Applications
          </Button>
        </div>
      </div>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the job listing.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
}