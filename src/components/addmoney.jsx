import { useState } from "react";

export default function AddMoney({ addModalData, setAddModalData, setEditData}){

const [addAmmount, setAddAmmount]= useState(0);

const handleAddAmmount = e =>{
    setAddAmmount(e.target.value);
};

if(parseFloat(addAmmount) < 0 || isNaN(parseFloat(addAmmount)) ){
    setAddAmmount(0);
}

const add = _ => {
    const sum = parseFloat(addAmmount) + addModalData.Balance;
    setEditData({...addModalData, Balance:sum, id: addModalData.id});
    setAddModalData(null);
    setAddAmmount(0);
}


if (addModalData === null){
    return null;
}

return (
    <div className="modal">
        <div className="modal-wrapper">
            <h4>Enter ammount to add to account:</h4>
            <input type="number" placeholder="0.00 €" step="0.01" min="0" max="100000"  value={parseFloat(addAmmount)>0?parseFloat(addAmmount):''} onChange={handleAddAmmount} />
            <button className="btn"  onClick={add}>Add money</button>
        </div>
    </div>
)

}






// export default function Edit({ editModalData, setEditModalData, setEditData }) {

//     const [color, setColor] = useState('#ffffff');

//     const save = _ => {
//         setEditData(
//             {
//                 color,
//                 id: editModalData.id
//             }
//         );
//         setEditModalData(null);
//     }

//     useEffect(() => {
//         if (null === editModalData) {
//             return;
//         }
//         setColor(editModalData.color)
//     }, [editModalData])


//     if (null === editModalData) {
//         return null;
//     }

//     return (
//         <div className="modal">
//             <div className="modal-dialog  modal-dialog-centered">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h5 className="modal-title yellow-color">Edit colot</h5>
//                         <button type="button" className="btn btn-close" onClick={_ => setEditModalData(null)}></button>
//                     </div>
//                     <div className="modal-body">
//                         <h5 className="card-title color-gray">Edit your fancy color to make more fancy</h5>

//                         <div className="m-3">
//                             <label className="form-label">Color picker</label>
//                             <input type="color" className="form-control form-control-color" value={color} onChange={e => setColor(e.target.value)} title="Choose your color" />
//                         </div>
//                     </div>
//                     <div className="modal-footer">
//                         <button type="button" className="green" onClick={_ => setEditModalData(null)}>Cancel</button>
//                         <button type="button" className="red" onClick={save}>Save</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );

// }