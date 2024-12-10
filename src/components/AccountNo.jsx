function AccountNo({user}){
    return(
        <div className="bg-[#19918F] p-12 rounded-2xl w-1/5">
          <p>Account No.</p>
          <p className="mt-3 font-bold">{user.accountno}</p>
        </div>
    );
}

export default AccountNo