import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X } from 'lucide-react';

const EditItemDialog = ({ isOpen, onClose, item, onSave }) => {
  const [editedItem, setEditedItem] = useState(item);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItem(prev => ({ ...prev, [name]: value }));
  };

  const handleResourceChange = (index, value) => {
    const newResources = [...editedItem.resources];
    newResources[index] = value;
    setEditedItem(prev => ({ ...prev, resources: newResources }));
  };

  const addResource = () => {
    setEditedItem(prev => ({ ...prev, resources: [...prev.resources, ''] }));
  };

  const removeResource = (index) => {
    const newResources = editedItem.resources.filter((_, i) => i !== index);
    setEditedItem(prev => ({ ...prev, resources: newResources }));
  };

  const handleSave = () => {
    onSave(editedItem);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-gray-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Editar Item</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <Input
            name="title"
            value={editedItem.title}
            onChange={handleChange}
            placeholder="Título"
            className="bg-gray-700 text-white"
          />
          <Textarea
            name="description"
            value={editedItem.description}
            onChange={handleChange}
            placeholder="Descripción"
            className="bg-gray-700 text-white"
          />
          <Textarea
            name="summary"
            value={editedItem.summary}
            onChange={handleChange}
            placeholder="Resumen"
            className="bg-gray-700 text-white"
          />
          <div>
            <h3 className="text-lg font-semibold mb-2">Recursos</h3>
            {editedItem.resources.map((resource, index) => (
              <div key={index} className="flex items-center mb-2">
                <Input
                  value={resource}
                  onChange={(e) => handleResourceChange(index, e.target.value)}
                  placeholder="URL del recurso"
                  className="flex-grow bg-gray-700 text-white"
                />
                <Button variant="ghost" size="icon" onClick={() => removeResource(index)}>
                  <X size={16} />
                </Button>
              </div>
            ))}
            <Button onClick={addResource} className="mt-2">Añadir Recurso</Button>
          </div>
          <Button onClick={handleSave} className="w-full">Guardar</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditItemDialog;
