import BlogForm from "./BlogForm"
import ProductForm from "./ProductForm"
import UserCount from "./UserCount"

const AdminApp = () => {
  return (
    <div className="container mx-auto">
      <h1>Admin Panel</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProductForm />
        <BlogForm />
        <UserCount count={100} />
      </div>
    </div>
  )
}

export default AdminApp