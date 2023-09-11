import {useState} from 'react';

export default function () {
  const [isEditing, isEditingSet] = useState<boolean>(false);

  function toggleEditing() {
    isEditingSet(c => !c);
  }

  return {isEditing, toggleEditing};
}
