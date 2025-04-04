package game.AST;
import game.GameState.Game.Direction;
import game.GameState.Game.Minion;

public class NearbyExpression extends InfoExpression {

    private Direction direction;

    public NearbyExpression(Direction direction){
        this.direction = direction;
    }

    @Override
    public long evaluate(Minion minion) throws Exception {
        return minion.getNearby(direction);
    }

    @Override
    public void prettyPrint(StringBuilder s, String prefix) {
        s.append(prefix);
        s.append("nearby ").append(direction);
    }
}
