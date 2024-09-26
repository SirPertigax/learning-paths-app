import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, Plus, Edit } from 'lucide-react';

const BoxItem = ({ item, isMain, position, onItemClick, onEdit, onAddSubItem, canEdit }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`${isMain ? 'w-64' : 'w-56'} ${position}`}>
      <div 
        className={`p-3 rounded shadow-lg cursor-pointer ${
          isMain ? 'bg-blue-600' : 'bg-gray-700'
        } hover:bg-opacity-90`}
      >
        <div className="flex justify-between items-center">
          <span className="text-white font-medium" onClick={() => onItemClick(item)}>{item.title}</span>
          <div className="flex items-center">
            {canEdit && (
              <>
                <Button variant="ghost" size="icon" onClick={() => onEdit(item)}>
                  <Edit size={16} />
                </Button>
                {isMain && (
                  <Button variant="ghost" size="icon" onClick={() => onAddSubItem(item)}>
                    <Plus size={16} />
                  </Button>
                )}
              </>
            )}
            {item.children && (
              <Button variant="ghost" size="icon" onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </Button>
            )}
          </div>
        </div>
      </div>
      {isExpanded && item.description && (
        <div className="mt-2 p-3 bg-gray-800 rounded shadow-lg">
          <p className="text-gray-300 text-sm">{item.description}</p>
        </div>
      )}
    </div>
  );
};

export default BoxItem;
