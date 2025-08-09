const CloseBurgerMenu = () => {
    return(<button className="relative z-50 p-6 bg-opacity-50 rounded-md bg-text group">
        <div className="w-8 h-1 rotate-45 -translate-x-1/2 absolute bg-text group-hover:animate-pulse"></div>
        <div className="w-8 h-1 -rotate-45 -translate-x-1/2 absolute bg-text group-hover:animate-pulse"></div>
    </button>)
}

export default CloseBurgerMenu;