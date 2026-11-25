

export default function UserCard({user}) {
    const {firstName , lastName , bio , gender , photoUrl} = user
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
                <p>{bio}</p>
                <span>Gender : {gender}</span>
                <div className="card-actions justify-center mt-4">
                <button className="btn btn-primary">ignore</button>
                <button className="btn btn-secondary">intrested</button>
                </div>
            </div>
            </div>
    </section>
  )
}
