import React from 'react';
import CollectionCard from './CollectionSection';
import WomanImg  from '../Assets/WomanImg.jpg';
import Sunglass  from '../Assets/Sunglass.jpg';
import MenCollections from '..//Assets/Mencollections.jpg'
function SomeComponent() {
  return (
    <div>
        <h1 className='center-align'>New Collection of Chicity</h1>
      <CollectionCard
    imageSrc={WomanImg }
        title="Women's Hot Collection"
        description="Lorem ipsum dolor sit amet consectetur. Nisi imperdiet at tellus sed vel neque sapien.Iorum ipsu AcLorem ipsum dolor sit amet consectetur. Nisi imperdiet at tellus sed vel neque sapien. Lorum ipsum Ac"
      />
      <CollectionCard
        imageSrc={Sunglass}
        title="Sunglasses Collection"
        description="Lorem ipsum dolor sit amet consectetur. Nisi imperdiet at tellus sed vel neque sapien.Iorum ipsu AcLorem ipsum dolor sit amet consectetur. Nisi imperdiet at tellus sed vel neque sapien. Lorum ipsum Ac"
      />
      <CollectionCard
        imageSrc={MenCollections}
        title="Men's Hot Collection"
        description="Lorem ipsum dolor sit amet consectetur. Nisi imperdiet at tellus sed vel neque sapien.Iorum ipsu AcLorem ipsum dolor sit amet consectetur. Nisi imperdiet at tellus sed vel neque sapien. Lorum ipsum Ac"
      />
    </div>
  );
}

export default SomeComponent;