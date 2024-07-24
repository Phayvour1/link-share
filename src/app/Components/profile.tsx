

export default function profile() {
  return (
    <div>
      <div>
        <p>Profile Details</p>
        <p>Add your details to create a personal touch to your profile.</p>
      </div>
      <div>
        <p>Profile picture</p>
        <div></div>
        <p>Image must be below 1024x1024px. Use PNG or JPG format.</p>
      </div>
      <div>
        <form action="">
          <label>First name*</label>
          <input type='text' placeholder='e.g. John'/>
          <label>Last name*</label>
          <input type='text' placeholder='e.g. Appleseed'/>
          <label>Email</label>
          <input type='text' placeholder='e.g. email@example.com'/>
        </form>
      </div>
    </div>
  )
}
