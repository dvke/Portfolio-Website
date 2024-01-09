import { useModal } from "../../context/ModalContext";

const ProjectItems = ({ item }) => {
  const { showModal } = useModal();
  const handleShowModal = () => {
    console.log(item);
    showModal(item);
  };
  return (
    <>
      <div onClick={handleShowModal} className="project__card" key={item.id}>
        <img src={item.image} alt="" className="project__img" />
        <h3 className="project__title">{item.title}</h3>
      </div>
    </>
  );
};

export default ProjectItems;
