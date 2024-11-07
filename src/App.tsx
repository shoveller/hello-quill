import ReactQuill from "react-quill";
import { useSearchParams } from "react-router-dom";
import 'react-quill/dist/quill.snow.css';

function App() {
  const [params, setParams] = useSearchParams()
  const value = params.get('value') || ''
  const onChange = (value: string) => {
    setParams({ value })
  }

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'align': [] }],
      ['link', 'image', 'video'],
      ['clean']
    ]
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'list', 'bullet',
    'align',
    'link', 'image', 'video'
  ];
  console.log(value)

  return (
    <ReactQuill 
      theme="snow" 
      value={value} 
      onChange={onChange}
      modules={modules}
      formats={formats}
      placeholder="내용을 입력하세요..."
      preserveWhitespace={true}
      style={{ height: '400px' }}
    />
  );
}

export default App
