// TODO: FIX SUPPORT FOR SINGLE/NONEXISTENT CHILD

const ViewSwitch = (props) => (
  props.children.map((view)=>{
    if (view.props.name === props.show) return view
    return null
  })
);

export default ViewSwitch;
