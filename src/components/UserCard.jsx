

export default function UserCard({user}) {
    const {firstName , lastName} = user
    console.log(user)
  return (
    <section className="userCard-wrapper  flex justify-center pt-18">
        <div className="card  w-96 bg-base-300 shadow-sm px-4 py-4">
            <figure>
                <img className="w-50"
                src="/userProfile.png"
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{`${firstName}  ${lastName}`}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-center mt-4">
                <button className="btn btn-primary">ignore</button>
                <button className="btn btn-secondary">intrested</button>
                </div>
            </div>
            </div>
    </section>
  )
}
