import Modal from 'react-modal';
import { useState, useEffect } from 'react';

function CreateProduct() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});
  const [dataCategory, setDataCategory] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      fetch("https://dummyjson.com/carts")
        .then(res => res.json())
        .then(data => {
          setDataCategory(data.carts);
        })
    }

    fetchApi();
  }, []);

  console.log(dataCategory);


  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const closeModal = () => {
    setShowModal(false);
  }

  const openModal = () => {
    setShowModal(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value
    })
  };


  return (
    <>
      <button onClick={openModal}>Tạo sản phẩm mới</button>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Tiêu đề</td>
                <td>
                  <input type='text' name='title' onChange={handleChange} required></input>
                </td>
              </tr>
              {dataCategory.length > 0 && (
                <tr>
                  <td>Danh mục</td>
                  <td>
                    <select name='category' onChange={handleChange} required>
                      {dataCategory.map((item) => (
                        <option key={item.id} value={item.products.title}>{item.products.title}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              )}

              <tr>
                <td>Giá</td>
                <td>
                  <input type='number' name='price' onChange={handleChange} required></input>
                </td>
              </tr>
              <tr>
                <td>Giảm giá</td>
                <td>
                  <input type='number' name='discountPercentage' onChange={handleChange} required></input>
                </td>
              </tr>
              <tr>
                <td>Số lượng còn lại</td>
                <td>
                  <input type='number' name='stock' onChange={handleChange} required></input>
                </td>
              </tr>
              <tr>
                <td>Đường dẫn ảnh</td>
                <td>
                  <input type='text' name='thumbnail' onChange={handleChange} required></input>
                </td>
              </tr>
              <tr>
                <td>Mô tả</td>
                <td>
                  <textarea rows={4} name='description' onChange={handleChange}></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={closeModal}>Hủy</button>
                </td>
                <td>
                  <input type='submit' value='Tạo mới'></input>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </Modal>
    </>
  );
}

export default CreateProduct;