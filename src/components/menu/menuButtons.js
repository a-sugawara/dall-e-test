import { addStack } from "../../redux/actions/stackActions"
import { properCase } from "../../helpers/properCasing"
import { useAppDispatch } from "../../hooks/reduxhooks"

export default function MenuButtons(props) {
    const dispatch = useAppDispatch()

    return (
        <div
            className="menu-button"
            onClick={() => dispatch(addStack(props.screen))}
        >
                <img
                    alt={props.screen}
                    className={"menu-icon"}
                    src={props.iconUrl}
                />
                <p className="menu-text">
                    {properCase(props.screen)}
                </p>

        </div>
    )
}
