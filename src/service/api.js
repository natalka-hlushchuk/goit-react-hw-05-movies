import axios from 'axios';

export async function searchPhoto(photoName, page) {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${photoName}&page=${page}&key=30473687-5047ffac8f3617cf871b8e4a3&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
