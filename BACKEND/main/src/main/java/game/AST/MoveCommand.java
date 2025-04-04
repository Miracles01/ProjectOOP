package game.AST;
import game.GameState.Game.Direction;
import game.GameState.Game.Minion;

public class MoveCommand extends Statement {

    private Direction direction;

    public MoveCommand(Direction direction) {
        this.direction = direction;
    }

    @Override
    public boolean execute(Minion target) throws Exception {
        target.move(direction);
        return false;
    }

    @Override
    public void prettyPrint(StringBuilder s, String prefix) {
        s.append("move ").append(direction);
    }
}
