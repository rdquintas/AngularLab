"use strict";
exports.__esModule = true;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(likes, isSelected) {
        this._likes = likes;
        this._isSelected = isSelected;
    }
    LikeComponent.prototype.onClick = function () {
        if (this._isSelected) {
            this._likes--;
            this._isSelected = false;
        }
        else {
            this._likes++;
            this._isSelected = true;
        }
    };
    LikeComponent.prototype.getLikesCount = function () {
        return this._likes;
    };
    LikeComponent.prototype.getIsSelected = function () {
        return this._isSelected;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
