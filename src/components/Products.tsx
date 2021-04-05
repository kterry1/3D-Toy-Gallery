import React, {useEffect} from 'react';
import AOS from 'aos';
import Card from './Card';

const Products = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
          });
    })
    return (
        <>
        <div className="product-container">
        <Card objPos={[0,-90,20]} camPos={[0, 4, 400]} location="/robot/scene.gltf" image={"https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"} title="Race Car" content="VRRMMM VRRMMM!! Pedal to the metal!" />
        <Card objPos={[0,1,11]} camPos={[0, 3, 14]} location="/fiat/scene.gltf" image={"https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"} title="Daffy Duck" content="Add Daffy to your Looney Tunes collection." />
        <Card objPos={[0,-7,20]} camPos={[0, 3, 40]} location="/bear/scene.gltf" image={"https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"} title="Teddy Bear" content="Snuggle up with this cute bear for all the naps." />
        <Card objPos={[0,-90, 3]} camPos={[0, 3, 350]} location="/park/scene.gltf" image={"https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"} title="Toy Jet" content="Hit the fastest speeds in this life like jet." />
        </div>
        </>
    )
}

export default Products;