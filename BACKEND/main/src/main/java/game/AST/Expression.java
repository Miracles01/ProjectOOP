package game.AST;

import game.GameState.Game.Minion;

public interface Expression extends Node {
    public long evaluate(Minion minion) throws Exception;
}
