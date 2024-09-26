import React, { useState } from 'react';
import BoxItem from './BoxItem';
import EditItemDialog from './EditItemDialog';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const LearningPathBoxes = ({ pathData, canEdit }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [editingItem, setEditingItem] = useState(null);
  const [currentPathData, setCurrentPathData] = useState(pathData);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  const handleSave = (editedItem) => {
    const updateItems = (items) => {
      return items.map(item => {
        if (item.id === editedItem.id) {
          return editedItem;
        }
        if (item.children) {
          return { ...item, children: updateItems(item.children) };
        }
        return item;
      });
    };

    setCurrentPathData(prev => ({
      ...prev,
      items: updateItems(prev.items)
    }));
    setEditingItem(null);
  };

  const handleAddSubItem = (parentItem) => {
    const newSubItem = {
      id: Date.now(),
      title: "Nuevo Subitem",
      description: "",
      summary: "",
      resources: []
    };

    const updateItems = (items) => {
      return items.map(item => {
        if (item.id === parentItem.id) {
          return { ...item, children: [...(item.children || []), newSubItem] };
        }
        if (item.children) {
          return { ...item, children: updateItems(item.children) };
        }
        return item;
      });
    };

    setCurrentPathData(prev => ({
      ...prev,
      items: updateItems(prev.items)
    }));
  };

  return (
    <div className="container mx-auto p-4 max-w-6xl bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">{currentPathData.title}</h1>
      <p className="text-gray-300 mb-8 text-center">{currentPathData.description}</p>
      <div className="relative">
        {currentPathData.items.map((item, index) => (
          <div key={item.id} className="flex mb-16 relative">
            <div className="w-1/3 flex justify-end pr-8">
              <BoxItem 
                item={item} 
                isMain={true} 
                position="z-10" 
                onItemClick={handleItemClick}
                onEdit={handleEdit}
                onAddSubItem={handleAddSubItem}
                canEdit={canEdit}
              />
            </div>
            <div className="w-2/3 flex flex-col justify-center">
              {item.children && item.children.map((child, childIndex) => (
                <div key={child.id} className="flex items-center mb-4">
                  <svg className="mr-4" width="40" height="2" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="1" x2="40" y2="1" stroke="#4B5563" strokeWidth="2" strokeDasharray="4" />
                  </svg>
                  <BoxItem 
                    item={child} 
                    isMain={false} 
                    position=""
                    onItemClick={handleItemClick}
                    onEdit={handleEdit}
                    canEdit={canEdit}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {selectedItem && (
        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="sm:max-w-[425px] bg-gray-800 text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{selectedItem.title}</DialogTitle>
              <DialogDescription className="text-gray-300">
                {selectedItem.description}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Resumen</h3>
              <p className="text-gray-300">{selectedItem.summary}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Recursos</h3>
              <ul className="list-disc pl-5 text-gray-300">
                {selectedItem.resources.map((resource, index) => (
                  <li key={index}>
                    <a href={resource} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                      {resource}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </DialogContent>
        </Dialog>
      )}
      {editingItem && (
        <EditItemDialog
          isOpen={!!editingItem}
          onClose={() => setEditingItem(null)}
          item={editingItem}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default LearningPathBoxes;
