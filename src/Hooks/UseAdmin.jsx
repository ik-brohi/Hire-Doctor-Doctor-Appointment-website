const { useEffect } = require("react");
const { useState } = require("react")

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/user/admin/${email}`)
                .then(res => res.json())
                .then(result => {
                    console.log("this is:", result);
                    setIsAdmin(result.isAdmin);
                    setLoading(false);
                })
        }
    }, [email])
    return [isAdmin, isLoading]
}
export default useAdmin;