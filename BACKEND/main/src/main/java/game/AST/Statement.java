package game.AST;

import game.GameState.Game.Minion;

public abstract class Statement implements Executable {

    @Override
    public abstract boolean execute(Minion target) throws Exception;

}
